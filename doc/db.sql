1. user
    id
    username
	password
    email

2. post
	id
	content : string
	image : 
    support : int
    oppose : int
    user : [{username, id}]
    comments : [{comment, user, createTime:}]
    createTime: