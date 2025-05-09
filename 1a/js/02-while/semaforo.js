


function semaforar(){
    let tempo 

    while(true){
        tempo = 5
        while(tempo > 0){
            alert("Verde - " + tempo)
            tempo--
        }
        tempo = 5
        while(tempo > 0){
            alert("Amarelo - " + tempo)
            tempo--
        }
        tempo = 5
        while(tempo > 0){
            alert("Vermelho - " + tempo)
            tempo--
        }
    }
}