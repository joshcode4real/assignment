const fs = require('fs');

const file = JSON.parse(fs.readFileSync(`${__dirname}/data.json`))

exports.getDat = (req, res, next)=>{
     res.status(200).json({
        success:true,
        msg:`this method is getting all the data`,
        data: {
            file
        }
    })
    next()
}

exports.getData = (req, res, next)=>{
    id = req.params.id *1 
    File = file.find(el=>el.id===id)
    res.status(200).json({
        success:true,
        msg:`this method is getting ${req.params.id}`,
        data: {
            File
        }
    })
    //next()
}

exports.postData = (req, res, next)=>{
    newID = file[file.length - 1].id + 1;
    newFile = Object.assign({id:newID}, req.body)
    file.push(newFile)
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(file), err=>{
        res.status(201).json({
            success: true,
            data: {
                newFile
            }
        })
    })
    // res.status(200).json({
    //     success:true,
    //     msg:`this method is getting ${req.params.id}`
    // })
    // next()
}

exports.putData = (req, res, next)=>{
    res.status(200).json({
        success:true,
        msg:`this method is getting ${req.params.id}`
    })
    next()
}

exports.deleteData = (req, res, next)=>{
    res.status(200).json({
        success:true,
        msg:`this method is getting ${req.params.id}`
    })
    next()
}