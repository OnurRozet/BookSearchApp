let book1={name:"Her Şeyi Düşünme" , author:"Anne Bogel",price:25,roof:"1.5 RAF"}
let book2={name:"Hiç Bir Karşılaşma Tesadüf Değildir" , author:"Hakan Mengüç",price:75 ,roof:"2.3 RAF"}
let book3={name:"İnsan Neyle Yaşar" , author:"Tolstoy",price:34 ,roof:"3.4 RAF"}
let book4={name:"Zafer Sızlanarak Kazanılmaz" , author:"Haluk Tatar",price:45 ,roof:"4.1 RAF"}
let book5={name:"Şeker Portakalı" , author:"Jose Mauro De Vasconcelos",price:80 ,roof:"5.3 RAF"}

let books=[book1,book2,book3,book4,book5]

let roof11={code:"1.1 RAF" , visible:false }
let roof12={code:"1.2 RAF" , visible:false }
let roof13={code:"1.3 RAF" , visible:false }
let roof14={code:"1.4 RAF" , visible:false }
let roof15={code:"1.5 RAF" , visible:false }

let roof21={code:"2.1 RAF" , visible:false }
let roof22={code:"2.2 RAF" , visible:false }
let roof23={code:"2.3 RAF" , visible:false }
let roof24={code:"2.4 RAF" , visible:false }
let roof25={code:"2.5 RAF" , visible:false }

let roof31={code:"3.1 RAF" , visible:false }
let roof32={code:"3.2 RAF" , visible:false }
let roof33={code:"3.3 RAF" , visible:false }
let roof34={code:"3.4 RAF" , visible:false }
let roof35={code:"3.5 RAF" , visible:false }

let roof41={code:"4.1 RAF" , visible:false }
let roof42={code:"4.2 RAF" , visible:false }
let roof43={code:"4.3 RAF" , visible:false }
let roof44={code:"4.4 RAF" , visible:false }
let roof45={code:"4.5 RAF" , visible:false }

let roof51={code:"5.1 RAF" , visible:false }
let roof52={code:"5.2 RAF" , visible:false }
let roof53={code:"5.3 RAF" , visible:false }
let roof54={code:"5.4 RAF" , visible:false }
let roof55={code:"5.5 RAF" , visible:false }

let roofs = [
    [roof51,roof52,roof53,roof54,roof55],
    [roof41,roof42,roof43,roof44,roof45],
    [roof31,roof32,roof33,roof34,roof45],
    [roof21,roof22,roof23,roof24,roof25],
    [roof11,roof12,roof13,roof14,roof15]

]
        
function createRoof(){
    console.clear()
    let satir=""
    for (let i = 0; i < roofs.length; i++) {
        for (let j = 0; j < 5; j++) {
              satir+=" | " + (roofs[i][j].visible ? roofs[i][j].code : "----" ) + ""        
        }
        console.log(satir)
        console.log("----------------------------------")
        satir=""   
    }
}

function findCode(e){
    let rafKod=null
    books.forEach(element => {
        if(element.name.toUpperCase().includes(e.toUpperCase(),0)){
            rafKod=element.roof
            
        }else{
            return null
        }
    });
    return rafKod
}

function showRoof(roofCode){
    for (let i = 0; i < roofs.length; i++) {
        
        for (let j = 0; j <5; j++) {
            
            if(roofs[i][j].code==roofCode){
                roofs[i][j].visible=true
                break
            }
            
        }
    }
    
   
}

createRoof()
let bookName=prompt("Lütfen bir kitap ismi giriniz!!!")
let roofCode=findCode(bookName)
if(roofCode!=null){
    showRoof(roofCode)
    createRoof()
    
}else{
    alert("Girdiğiniz kitap bulunamamıştır")
}
