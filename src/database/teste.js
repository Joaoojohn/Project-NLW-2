const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db)=>{

    proffyValue ={

        name: "João Pedro", 
        avatar: "https://avatars0.githubusercontent.com/u/58264476?s=460&u=f17592baa9978397bee5619e385802981d06b843&v=4",
        whatsapp: "11970604853",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }
    classValue= {

        subject: 1, 
        cost: "20", 
    }

    classScheduleValues =[
    {

        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    
    }
]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues }) 


    //Consultar

   const selectedProffys =  await db.all("SELECT * FROM proffys")


   
//consulta com chave estrangeira
   

   const SelectedClassesAndProffy =  await db.all(`

    SELECT  classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffy_id)

    WHERE classes.proffy_id = 1;
   `)

 //  console.log(SelectedClassesAndProffy)

//consulta filtrada 

 const SelectedClassSchedule = await db.all(`
    
    SELECT class_schedule.*
    FROM class_schedule

    WHERE class_schedule.class_id = 1

    AND class_schedule.weekday = "0"

    AND class_schedule.time_from  <= "520"

    AND class_schedule.time_to  > "520"


 `)
 

 console.log(SelectedClassSchedule)


})