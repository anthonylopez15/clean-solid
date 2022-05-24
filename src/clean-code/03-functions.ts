(() => {

    function getMovieById(Id: string) {
        console.log({ Id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorActorById(actorId: string) {
        console.log({ actorId });
    }

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[]
    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthDate);
        return true;

    }
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead) return 1500
        
        if ( isSeparated ) return 2500

        return isRetired ? 3000 : 4000
        
    }
})();
