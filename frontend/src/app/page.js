import FormTask from "@/app/components/FormTask";
import ListTask from "@/app/components/ListTask";

function HomePage (){
  return (
      <div>
        <h1>Task App</h1>
          <div>
              <FormTask />
              <ListTask />
          </div>
      </div>

  )
}
export default HomePage