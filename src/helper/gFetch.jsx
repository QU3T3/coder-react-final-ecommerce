let obj = [
    {id: '1', name:'Pokemon Heart Gold', categoria: 'ds', stock: '100', price: '80', urlImage: 'https://img.pokemondb.net/boxes/lg/heartgold-large.jpg'},
    {id: '2', name:'Pokemon Soul Silver', categoria: 'ds', stock: '100', price: '80', urlImage: 'https://img.pokemondb.net/boxes/lg/soulsilver-large.jpg'},
    {id: '3', name:'Pokemon Black', categoria: 'ds', stock: '100', price: '100', urlImage: 'https://img.pokemondb.net/boxes/lg/black-large.jpg'},
    {id: '4', name:'Pokemon White', categoria: 'ds', stock: '100', price: '100', urlImage: 'https://img.pokemondb.net/boxes/lg/white-large.jpg'},
    {id: '5', name:'Pokemon X', categoria: '3ds', stock: '100', price: '130', urlImage: 'https://img.pokemondb.net/boxes/lg/x-large.jpg'},
    {id: '6', name:'Pokemon Y', categoria: '3ds', stock: '100', price: '130', urlImage: 'https://img.pokemondb.net/boxes/lg/y-large.jpg'}
]

export const gFetch = (nro) => {
    return new Promise( (resolve, reject)=>{
        const condition = true
        if (condition) {
            setTimeout(()=>{
                resolve(obj)
            }, 1000)
        } else{
            reject('Dormiste')
        }
    })
}