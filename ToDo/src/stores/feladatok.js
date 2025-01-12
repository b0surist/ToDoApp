import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useFeladatStore = defineStore('feladat', () =>{
    const feladatok = ref([
        {
            id:"1",
            title: 'valami',
            desc: "valaki",
            isFinished: false,
            deadline: "2025-01-12"
        },
  
   
    ])
    const feladatHozzaadas = (feladat) =>{
        feladatok.value.push(feladat)
    }

    const feladatKesz = (feladat) =>{
        const index = feladatok.value.indexOf(feladat);
            if (index > -1) {
                feladatok.value.splice(index, 1);
            }
    }
    return {feladatok, feladatHozzaadas, feladatKesz}
})