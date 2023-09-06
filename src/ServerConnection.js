import axios from 'axios';
const backendUrl = 'http://localhost:3000';
export const abonamenteCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/abonamente');
            result.data.forEach((abonament) => {
                abonament.id = abonament.idAbo;
                delete abonament.idAbo;
            });
            return result.data;
        } catch (error) {
            console.error('Error while getting Abonamente', error);
            return error;
        }
    }
    ,
    insert: async (abonament) => {
        try {
            const result = await axios.post(backendUrl+'/abonamente', abonament);
            return result.data;
        } catch (error) {
            console.error('Error while inserting Abonamente', error);
            return error;
        }
    }
    ,
    update: async (abonament,id) => {
        try {
            const result = await axios.put(backendUrl+'/abonamente/'+id, abonament);
            return result.data;
        } catch (error) {
            console.error('Error while updating Abonamente', error);
            return error;
        }
    }
    ,
    delete: async (id) => {
        try {
            const result = await axios.delete(backendUrl+'/abonamente/'+id);
            return result.data;
        } catch (error) {
            console.error('Error while deleting Abonamente', error);
            return error;
        }
    },
};

export const antrenamenteCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/antrenamente');
            return result.data;
        } catch (error) {
            console.error('Error while getting Antrenamente', error);
            return error;
        }
    },
    insert: async (antrenament) => {
        try {
            const result = await axios.post(backendUrl+'/antrenamente', antrenament);
            return result.data;
        } catch (error) {
            console.error('Error while inserting Antrenamente', error);
            return error;
        }
    }
    ,
    update: async (antrenament,id) => {
        try {
            const result = await axios.put(backendUrl+'/antrenamente/'+id, antrenament);
            return result.data;
        } catch (error) {
            console.error('Error while updating Antrenamente', error);
            return error;
        }
    }
    ,
    delete: async (id) => {
        try {
            const result = await axios.delete(backendUrl+'/antrenamente/'+id);
            return result.data;
        } catch (error) {
            console.error('Error while deleting Antrenamente', error);
            return error;
        }
    }
};

export const produseCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/produse');
            // 
            result.data.forEach((produs) => {
                produs.id = produs.idProdus;
                delete produs.idProdus;
            });
            return result.data;
        } catch (error) {
            console.error('Error while getting Produse', error);
            return error;
        }
    }
    ,
    insert: async (produs) => {
        try {
            const result = await axios.post(backendUrl+'/produse', produs);
            return result.data;
        } catch (error) {
            console.error('Error while inserting Produse', error);
            return error;
        }
    }
    ,
    update: async (produs,id) => {
        try {
            const result = await axios.put(backendUrl+'/produse/'+id, produs);
            return result.data;
        } catch (error) {
            console.error('Error while updating Produse', error);
            return error;
        }
    }
    ,
    delete: async (id) => {
        try {
            const result = await axios.delete(backendUrl+'/produse/'+id);
            return result.data;
        } catch (error) {
            console.error('Error while deleting Produse', error);
            return error;
        }
    }
};

export const comenziCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/comenzi');
            return result.data;
        } catch (error) {
            console.error('Error while getting Comenzi', error);
            return error;
        }
    }
    ,
    insert: async (comanda) => {
        try {
            const result = await axios.post(backendUrl+'/comenzi', comanda);
            return result.data;
        } catch (error) {
            console.error('Error while inserting Comenzi', error);
            return error;
        }
    }
    ,
    update: async (comanda,id) => {
        try {
            const result = await axios.put(backendUrl+'/comenzi/'+id, comanda);
            return result.data;
        } catch (error) {
            console.error('Error while updating Comenzi', error);
            return error;
        }
    }
    ,
    delete: async (id) => {
        try {
            const result = await axios.delete(backendUrl+'/comenzi/'+id);
            return result.data;
        } catch (error) {
            console.error('Error while deleting Comenzi', error);
            return error;
        }
    }
};

export const stiriCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/stiri');
            result.data.forEach((stire) => {
                stire.id = stire.idStire;
                delete stire.idStire;
            });
            return result.data;
        } catch (error) {
            console.error('Error while getting Stiri', error);
            return error;
        }
    }
    ,
    insert: async (stire) => {
        try {
            const result = await axios.post(backendUrl+'/stiri', stire);
            return result.data;
        } catch (error) {
            console.error('Error while inserting Stiri', error);
            return error;
        }
    }
    ,
    update: async (stire,id) => {
        try {
            const result = await axios.put(backendUrl+'/stiri/'+id, stire);
            return result.data;
        } catch (error) {
            console.error('Error while updating Stiri', error);
            return error;
        }
    }
    ,
    delete: async (id) => {
        try {
            const result = await axios.delete(backendUrl+'/stiri/'+id);
            return result.data;
        } catch (error) {
            console.error('Error while deleting Stiri', error);
            return error;
        }
    }
};

export const persoaneCrud = {
    getAll: async () => {
        try {
            const result = await axios.get(backendUrl+'/persoane');
            return result.data;
        } catch (error) {
            console.error('Error while getting Persoane', error);
            return error;
        }
    }
};