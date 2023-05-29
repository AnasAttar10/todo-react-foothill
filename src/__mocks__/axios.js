const mockResponse={
    data :[
        {
            completed : false , 
            id : 1 ,
            title : "quis ut nam facilis et officia qui Anas" , 
            userId : 1 
        } ,
        {
            completed : true , 
            id : 2 ,
            title : "quis ut nam facilis et officia qui Ahmad" , 
            userId : 2 
        } ,
        {
            completed : false , 
            id : 3 ,
            title : "quis ut nam facilis et officia qui Omar" , 
            userId : 3 
        }
    ]
}
export default{
    get :jest.fn().mockResolvedValue(mockResponse)
}