const { Event, Profile, event_has_photos }= require("../database/models");

exports.criarUmEvento= (
    event_id,
    profile_id,
    name,
    beginning_date,
    ends_date,
    hour,
    finish_hour,
    description,
    local,
    photo_id,
    photo_event_path) =>  Event.create(
                        event_id,
                        profile_id,
                        name,
                        beginning_date,
                        ends_date,
                        hour,
                        finish_hour,
                        description,
                        local,
                        photo_id,
                        photo_event_path);
                

exports.listarEventos= (profile_id) => Event.findAll(profile_id);
        
exports.buscarProfile = (id) => Profile.findByPk(id);

exports.buscarTodosEventos = () => Event.findAll();