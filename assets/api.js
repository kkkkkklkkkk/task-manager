class API{
    constructor(){
        this.endpoint = `https://646903ca183682d61437e53d.mockapi.io`;
    }
    async loadTasks(){
        let responce = await fetch(this.endpoint + `/tasks`);
        let data = await responce.json();
        return data;
    }
    async addTask(name, description){
        let responce = await fetch(this.endpoint + `/tasks`, {
            method : 'POST',
            body: JSON.stringify({
                name: name,
                description: description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await responce.json();
        return data;
    }
    async deleteTask(id){
        let response = await fetch(this.endpoint + `/tasks/${id}`, {
            method: 'DELETE',
        });
    }
}