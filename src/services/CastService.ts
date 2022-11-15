import * as CastRepository from '../repositories/Actor_repo';

const getAllCast = () => {
    
}

const getCastByID = (id: number) => {
    // blablabla
    const cast = CastRepository.readActorbyID(id)
    return cast;
}

const createCast = () => {
    
}

const updateCast = () => {
    
}

const deleteCast = () => {
    
}

export {getAllCast, getCastByID, createCast, updateCast, deleteCast};