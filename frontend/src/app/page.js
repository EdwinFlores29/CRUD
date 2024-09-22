import FormTask from "@/app/components/FormTask";
import ListTask from "@/app/components/ListTask";

function HomePage (){
  return (
      <div className="container p-7">
        <h1 className="font-bold">Task App</h1>
          <div className="flex gap-x-10">
              <FormTask />
              <ListTask />
          </div>
      </div>

  )
}
export default HomePage