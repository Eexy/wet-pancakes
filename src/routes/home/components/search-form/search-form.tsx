import { Form } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function SearchForm() {
  return <Form role={"search"}
               className={"flex items-center gap-3 p-1 border border-slate-400/80 shadow-sm rounded  md:w-fit text-slate-400"}>
    <MagnifyingGlassIcon className={"h-6 w-6 "} />
    <input type={"search"} id={"city"} name={"city"} placeholder={"City"} className={"outline-none flex-1 text-lg"} />
  </Form>;
}
