import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  DoorClosed,
  CheckCircle2,
  Edit3,
  BedDouble,
  Bath,
  Wifi,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { Modal } from "../components/ui/Modal";

export function Rooms() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "Standard Room",
    capacity: "2",
    price: "",
  });

  const [typeFilter, setTypeFilter] = useState("Tất cả loại hình");
  const [statusFilter, setStatusFilter] = useState("Tất cả trạng thái");

  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "P.101",
      type: "Standard Room",
      capacity: 2,
      price: "850K",
      status: "Đang có khách",
      bg: "bg-secondary-container",
      text: "text-on-secondary-container",
    },
    {
      id: 2,
      name: "P.102",
      type: "Standard Room",
      capacity: 2,
      price: "850K",
      status: "Bảo trì",
      bg: "bg-error-container",
      text: "text-on-error-container",
    },
    {
      id: 3,
      name: "P.201",
      type: "Deluxe Room",
      capacity: 2,
      price: "1.2M",
      status: "Đang có khách",
      bg: "bg-secondary-container",
      text: "text-on-secondary-container",
    },
    {
      id: 4,
      name: "P.202",
      type: "Deluxe Room",
      capacity: 2,
      price: "1.2M",
      status: "Trống",
      bg: "bg-primary-container",
      text: "text-on-primary-container",
    },
    {
      id: 5,
      name: "P.301",
      type: "Suite Balcony",
      capacity: 4,
      price: "2.5M",
      status: "Trống",
      bg: "bg-primary-container",
      text: "text-on-primary-container",
    },
    {
      id: 6,
      name: "Villa 1",
      type: "Whole Villa",
      capacity: 10,
      price: "5.5M",
      status: "Tạm khóa",
      bg: "bg-surface-container-high",
      text: "text-on-surface-variant",
    },
  ]);

  React.useEffect(() => {
    const handleSetFilter = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setStatusFilter(customEvent.detail);
      }
    };
    const handleAddRoomTrigger = () => {
      setEditingRoom(null);
      setFormData({ name: "", type: "Standard Room", capacity: "2", price: "" });
      setIsAddModalOpen(true);
    };
    window.addEventListener("setRoomsStatusFilter", handleSetFilter);
    window.addEventListener("triggerAddRoomModal", handleAddRoomTrigger);
    return () => {
      window.removeEventListener("setRoomsStatusFilter", handleSetFilter);
      window.removeEventListener("triggerAddRoomModal", handleAddRoomTrigger);
    };
  }, []);

  const handleDelete = (id: number) => {
    setRooms(rooms.filter((r) => r.id !== id));
  };

  const openEditModal = (room: any) => {
    setEditingRoom(room);
    setFormData({
      name: room.name,
      type: room.type,
      capacity: room.capacity.toString(),
      price: room.price,
    });
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingRoom(null);
  };

  const handleSaveRoom = () => {
    if (editingRoom) {
      setRooms(
        rooms.map((r) =>
          r.id === editingRoom.id
            ? {
                ...r,
                name: formData.name || r.name,
                type: formData.type || r.type,
                capacity: parseInt(formData.capacity) || r.capacity,
                price: formData.price || r.price,
              }
            : r,
        ),
      );
    } else {
      setRooms([
        ...rooms,
        {
          id: Math.random(),
          name: formData.name || "Phòng mới",
          type: formData.type || "Standard Room",
          capacity: parseInt(formData.capacity) || 2,
          price: formData.price || "1M",
          status: "Trống",
          bg: "bg-primary-container",
          text: "text-on-primary-container",
        },
      ]);
    }
    closeModal();
  };

  const filteredRooms = rooms.filter((r) => {
    const passType = typeFilter === "Tất cả loại hình" || r.type === typeFilter;
    const passStatus =
      statusFilter === "Tất cả trạng thái" || r.status === statusFilter;
    return passType && passStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-primary">
            Quản lý phòng/căn
          </h2>
          <p className="text-on-surface-variant text-base mt-2">
            Cấu hình thông tin, giá bán và tình trạng phòng
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setEditingRoom(null);
              setFormData({
                name: "",
                type: "Standard Room",
                capacity: "2",
                price: "",
              });
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <Plus size={18} />
            Thêm Phòng
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            type="text"
            placeholder="Tìm theo tên phòng, loại phòng..."
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-outline-variant rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2.5 border border-outline-variant bg-surface-container-lowest rounded-xl text-sm font-medium hover:bg-surface-container outline-none focus:border-primary"
          >
            <option>Tất cả loại hình</option>
            <option>Standard Room</option>
            <option>Deluxe Room</option>
            <option>Suite Balcony</option>
            <option>Whole Villa</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border border-outline-variant bg-surface-container-lowest rounded-xl text-sm font-medium hover:bg-surface-container outline-none focus:border-primary"
          >
            <option>Tất cả trạng thái</option>
            <option>Trống</option>
            <option>Đang có khách</option>
            <option>Bảo trì</option>
            <option>Tạm khóa</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm overflow-hidden group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md ${room.bg} ${room.text}`}
              >
                {room.status}
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => openEditModal(room)}
                  className="text-outline hover:text-primary transition-colors bg-surface-container p-1 rounded"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(room.id)}
                  className="text-outline hover:text-error transition-colors bg-surface-container p-1 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold flex items-center gap-2 mt-2">
              <DoorClosed size={24} className="text-outline" /> {room.name}
            </h3>
            <p className="text-sm font-semibold text-secondary mt-1">
              {room.type}
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <BedDouble size={16} /> Tiêu chuẩn {room.capacity}NL
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} /> Riêng
              </span>
            </div>

            <div className="pt-4 border-t border-outline-variant mt-6 flex justify-between items-end">
              <div>
                <p className="text-xs text-on-surface-variant mb-1">
                  Giá ngày thường
                </p>
                <p className="text-lg font-bold text-on-surface">
                  {room.price}{" "}
                  <span className="text-xs font-normal text-on-surface-variant">
                    /đêm
                  </span>
                </p>
              </div>
              <button
                onClick={() => openEditModal(room)}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        title={editingRoom ? "Chỉnh sửa phòng/căn" : "Thêm phòng/căn mới"}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">
                Tên phòng/căn
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                placeholder="VD: P.101, Daisy Villa"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">
                Loại hình
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
              >
                <option value="Standard Room">Room (Phòng lẻ)</option>
                <option value="Apartment">Apartment (Căn hộ)</option>
                <option value="Whole Villa">Villa (Biệt thự)</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Dorm">Dorm</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">
                Sức chứa tiêu chuẩn
              </label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({ ...formData, capacity: e.target.value })
                }
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface">
                Sức chứa tối đa (+phụ thu)
              </label>
              <input
                type="number"
                defaultValue="3"
                className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-sm font-bold text-on-surface mb-2">
              Cấu hình giá (VNĐ)
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-on-surface-variant">
                  Ngày thường
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  placeholder="Thứ 2 - Thứ 5"
                  className="mt-1 w-full px-3 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">
                  Cuối tuần
                </label>
                <input
                  type="text"
                  placeholder="Thứ 6 - CN"
                  className="mt-1 w-full px-3 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">
                  Lễ/Tết
                </label>
                <input
                  type="text"
                  placeholder="Giá cao điểm"
                  className="mt-1 w-full px-3 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-sm font-bold text-on-surface mb-2">Tiện ích</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Smart TV",
                "Máy lạnh",
                "Bồn tắm",
                "Bếp riêng",
                "Ban công",
                "Máy sấy",
                "Tủ lạnh mini",
                "View biển",
              ].map((amenity, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer bg-surface border border-outline-variant px-3 py-1.5 rounded-full text-xs font-semibold hover:border-primary"
                >
                  <input
                    type="checkbox"
                    defaultChecked={i < 3}
                    className="accent-primary"
                  />{" "}
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-outline-variant flex justify-end gap-3 mt-6">
            <button
              onClick={closeModal}
              className="px-6 py-2.5 rounded-xl font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSaveRoom}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {editingRoom ? "Lưu thay đổi" : "Lưu phòng"}
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
