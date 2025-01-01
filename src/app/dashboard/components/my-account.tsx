import {
  ChevronsRight,
  NotebookPen,
  ScrollText,
  SquareKanban,
  User,
} from "lucide-react";

export function MyAccount() {
  const SUB_MENU = [
    { title: "invoices", icon: <ScrollText className="size-8" /> },
    { title: "credit notes", icon: <NotebookPen className="size-8" /> },
    { title: "statements", icon: <SquareKanban className="size-8" /> },
    { title: "adjust account", icon: <User className="size-8" /> },
  ];
  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg w-full">
      <div className="border-b pb-4 flex justify-between gap-4">
        <h1 className="text-blue-600 font-bold text-2xl">My Account</h1>
        <div className="flex justify-start items-center gap-1">
          <ChevronsRight className="w-6 h-6 text-red-600" />
          <span className="text-red-600 font-semibold">Upcoming Events</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center p-5 gap-4 bg-gradient-to-b from-blue-500 to-blue-300 md:bg-white rounded-3xl md:rounded md:from-transparent md:to-transparent ">
        <div className="flex justify-between md:flex-col md:justify-center md:items-center w-full">
          <p className="text-white font-bold text-xl md:text-black md:font-normal md:text-md">
            Account Balance
          </p>
          <p className="text-white font-bold text-2xl md:text-black md:font-normal md:text-sm">
            R 19307.17
          </p>
        </div>
        <div className="flex gap-2 flex-wrap justify-center bg-white p-4 rounded-3xl shadow-lg md:shadow-none md:rounded-none md:bg-transparent">
          {SUB_MENU.map((menu) => (
            <div
              className="md:border md:border-red-500 p-2 md:rounded md:text-red-500 font-bold uppercase flex flex-col justify-center items-center"
              key={menu.title}
            >
              <span className="md:hidden">{menu.icon}</span>
              {menu.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
