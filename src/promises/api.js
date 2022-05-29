const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need", 
        { count: studentsCount }).then((response) => response.data);
    },
    getVacanciesCountFromMicrosoft() {
        return axios.get("https://microsoft.com").then((response) => response.data);
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com").then((response) => response.data);
    }
}