import axios, {AxiosResponse} from "axios";

interface Todo { 
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchdata = async () => {
  try {
    const response : AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Data :",response.data);
  } catch (error : any) {
    console.log("Error", error);
  }
}

fetchdata()