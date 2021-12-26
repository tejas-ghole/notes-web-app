const btn = document.querySelector("#add");


const updatetoLSD = () =>{
    const txtar =  document.querySelectorAll('textarea');
    const notu = [];
    txtar.forEach((element)=>{
        return notu.push(element.value);
    })
    localStorage.setItem('notu',JSON.stringify(notu));
s
}


const newNotes = (text="") =>{
    const notes = document.createElement('div');
    notes.classList.add('newnote');
    const htmlData = `<div class="men">
                            <div class="operation">
                                <button class="edit" id="ed"><i class="fas fa-edit fa-2x"></i></button>
                                <button class="delete" ><i class="fas fa-trash fa-2x" id="del"></i></button>
                            </div>
                        <div class="main ${text?'':'hidden'}"></div>
                        <textarea class="${text?'hidden':''}" ></textarea>
                     </div>   
                        
                        `;
    notes.insertAdjacentHTML('afterbegin',htmlData);

    // taking reference
    const edit =  notes.querySelector('.edit');
    const delt =  notes.querySelector('.delete');
    const main =  notes.querySelector('.main');
    const textArea =notes.querySelector('textarea');

    // delting notes
    delt.addEventListener("click",()=>{
        notes.remove();
        updatetoLSD();
    })

    // editing notes

    textArea.value = text;
    main.innerHTML= text;

    
    edit.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })
    textArea.addEventListener('change',(event)=>{
        val =  event.target.value;
        main.innerHTML =  val;
        updatetoLSD();
    })

    document.body.appendChild(notes);


}


const notu = JSON.parse(localStorage.getItem('notu'));

if(notu){
    notu.forEach((element)=> newNotes(element));
}


btn.addEventListener('click',()=>newNotes());