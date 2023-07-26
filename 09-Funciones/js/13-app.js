const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el ID ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando Playlist... ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo Playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    }, 
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Candy';
reproductor.obtenerCancion;

// reproductor.reproducir(30);
// reproductor.reproducir(20);
// reproductor.pausar();
// reproductor.borrar(30);
// reproductor.crearPlaylist('Bachata');
// reproductor.reproducirPlaylist('Romeo');