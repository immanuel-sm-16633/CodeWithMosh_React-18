import create from "./Http-service";
import apiClient from "./api-client";

export interface Users {
  id: number;
  name: string;
}

export default create("/users");
