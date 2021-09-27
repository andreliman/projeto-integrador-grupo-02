const { v4 }= require('uuid');
const eventModels = require("../models/eventModels");

exports.criarUmEvento = ({ 
    profile_id,
    name,
    beginning_date,
    ends_date,
    hour,
    finish_hour,
    description,
    local,
    photo_event_path,
    photo_id
}) => { 
        const event_id = v4();
        eventModels.criarUmEvento({
                event_id,
                profile_id,
                name,
                beginning_date,
                ends_date,
                hour,
                finish_hour,
                description,
                local,
                photo_event_path,
                photo_id
        })};


exports.listarEventosPorId = (profile_id) => {
    try{
        const profileEvents= eventModels.listarEventos(profile_id);
        return profileEvents;
    } catch (error){
        return error;
    }
};


exports.buscarTodosEventos = () => eventModels.buscarTodosEventos();