let marks = [
    {"name" : "Karan","marks" : {
        "English" : 50, "Maths" :30, "Science" : false,
    }},

    {"name" : "Om","marks" : {
        "English" : 70, "Maths" :22, "Science" : 11,
    }},

    {"name" : "Jay","marks" : {
        "English" : 45, "Maths" :false, "Science" : 90,
    }},

    {"name" : "Ram","marks" : {
        "English" : 56, "Maths" :43, "Science" : 87,
    }}
]
marks.map((m)=>{
    console.log("---------------------------------------------------")
    console.log("---------------------------------------------------")
    console.log(m.name,  "\n\tEnglish : ", m.marks.English , "\t | \n\tMaths : ", m.marks.Maths , "\t | \n\tScience : ", m.marks.Science ,"\t |")
    
})