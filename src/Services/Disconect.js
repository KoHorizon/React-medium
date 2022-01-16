import { deleteToken, getToken } from "./API";
import { useEffect } from "react/cjs/react.development";



export default function Disconnect() {
    deleteToken();
    window.location.reload(false);
}