((app)=>{
  'use strict'

app.service('usersService', function($http){
  return{

    get(){
      return $http.get('/api/users') //promise

    },
    add(user){
      return $http.post('/api/users',user)//(url, object)
    },
    upload(image) {
                return new Promise((resolve, reject) => {
                    let url = '/api/upload'
                    let xhr = new XMLHttpRequest()
                    let fd = new FormData()
                    xhr.open("POST", url, true);
                    //  xhr.setRequestHeader("Authorization", this.$cookies.get('token'));
                    xhr.onreadystatechange = function(e) {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    };
                    fd.append('image', image)
                    xhr.send(fd)
                })
},
    edit(user){
      return $http.put('/api/users/' + user._id, user) //(url+id+objet)
    },
    delete(user){
      return $http.delete('/api/users/' + user._id) // (url+id)

    }
  }

})})(angular.module('app.services'))
