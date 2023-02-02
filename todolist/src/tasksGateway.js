const baseUrl = 'https://crudcrud.com/api/e933c900776444eb94339689682fe820/tasks';

export const createTask = (taskData) => {
   return fetch(baseUrl, {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData),
   }).then(response => {
      if(!response.ok) throw new Error('Faild to create task');
   })
};

export const getAllTasks = () => {
   return fetch(baseUrl).then(res =>{
      if(res.ok){
         return res.json();
      }
   }).then(tasksList => {
      return tasksList.map(({_id, ...task})=>({id: _id, ...task,}));
   });
}

export const updateTask = (id, updatedTask) => {
   return fetch(`${baseUrl}/${id}`,{
      method: 'put',
      headers:{
         "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask),
   }).then(response => {
      if(!response.ok) throw new Error('Failed');
   })
}

export const deleteTask = (id) => {
   return fetch(`${baseUrl}/${id}`,{
      method: 'delete',
   }).then(response => {
      if(!response.ok) throw new Error ('Failed');
   })
}