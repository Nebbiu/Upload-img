((app) => {
    'use strict'
    app.component('userslist', {
        templateUrl: '/components/userslist.html',
        controller: ['usersService', function(usersService) {


            let _previous = {}

            usersService.get().then((res) => {
                this.users = res.data

            })

            this.add = () => {

                usersService.upload(this.selectedUser.image)

                this.selectedUser.image = `static/img/${this.selectedUser.image.name}`;
                usersService.add(this.selectedUser).then((res) => {
                    console.log(res)
                })
            }

            this.delete = (user, $index) => {
                usersService.delete(user).then((res) => {
                    this.users.splice($index, 1);
                })
            }
            this.edit = (user) => {
                if (user.editMode) {
                    usersService.edit(user).then((res) => {
                        user.editMode = false
                    })
                } else {
                    _previous[user._id] = angular.copy(user)
                    user.editMode = true
                }
            }

            this.cancel = (user, index) => {
                    this.users[index] = _previous[user._id]
                }
                //         this.addImg = (users.image)=>{
                //         if (user.image.name != undefined) {
                //                                 usersService.upload(user.image)
                //                                 this.image.push(`img/${user.image.name}`)
                //                             }
                //                             user.image = this.image
                //                             usersService.edit(user).then((res) => {
                //                                 this.users = res.config.data
                //                             })
                // this.editMode = false
                // }


        }]
    })
})(angular.module('app.users'))
