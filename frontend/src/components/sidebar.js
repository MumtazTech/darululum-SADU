import Image from "next/image";
import { FiHome, FiUser, FiUsers, FiBook, FiBookOpen } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-white h-[100vh]">
        <div className="px-8 py-8">
          <div className="flex items-center gap-3">
            <Image
              src={require("../assets/logo.png")}
              quality={70}
              alt="Logo Sadu"
              className="w-12"
            />
            <h2 className="text-4xl font-semibold">SADU</h2>
          </div>
          <p className="text-left mt-2 text-sm">Sistem Akademik Daarul Ulum</p>
        </div>
        <ul className="flex px-5 flex-col gap-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-medium px-3 py-1 relative bg-secondary after:content-[''] after:block after:absolute after:top-0 2xl:after:right-[99%] after:right-[98.5%] after:left-0 after:bottom-0 after:bg-primary after:rounded-sm text-primary rounded-sm"
            >
              <FiHome />
              <span>Beranda</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-normal px-3 py-1 relative bg-white"
            >
              <FiUser />
              <span>Musyrif</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-normal px-3 py-1 relative bg-white"
            >
              <FiUsers />
              <span>Siswa</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-normal px-3 py-1 relative bg-white"
            >
              <FiBook />
              <span>Kelas</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-normal px-3 py-1 relative bg-white"
            >
              <FiBookOpen />
              <span>Kelompok Tahfidz</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
