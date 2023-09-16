import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <Sidebar />
        </div>
        <div className="md:col-span-3 bg-[#f2f2f2] px-8 py-8">
          <header className="flex items-center justify-between">
            <h3 className="text-4xl font-medium">Beranda</h3>
            <button>
              <Image
                src={require("../assets/avatar.png")}
                quality={70}
                alt="Profile Avatar"
                className="w-12 h-12 object-cover object-center"
              />
            </button>
          </header>
          <main className="mt-5">
            <div className="grid grid-cols-4 gap-3">
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
