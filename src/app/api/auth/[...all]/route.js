
import { auth } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const { POST, GET, PUT, DELETE, PATCH } = toNextJsHandler(auth);

export { POST, GET, PUT, DELETE, PATCH };