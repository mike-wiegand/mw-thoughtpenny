export const API_URL = "http://localhost:8080";
export const API_KEY = "";

function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US");
    return formattedDate;
}

export default formatDate;