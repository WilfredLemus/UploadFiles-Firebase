import { Injectable } from '@angular/core';
import { Upload } from './../interfaces/upload';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
  // Ruta en DB donde se guardara la informacion del archivo subido
  private basePath: string = '/uploads';

  uploads: FirebaseListObservable<Upload[]>;
  
  constructor(private afDB: AngularFireDatabase) { }

  // Obtenemos los archivos ya subidos
  getUploads(query={}){
    this.uploads = this.afDB.list(this.basePath, { query: query });

    return this.uploads;
  }

  deleteUpload(upload: Upload){
    this.deleteFileData(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name)
      })
      .catch(err => console.log(err))
  }

  pushUpload(upload: Upload){
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // Progreso de la carga del archivo
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error)
      },
      () => {
        // Carga de archivo terminada correctamente
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      })
  }

  // Se guarda la informacion del archivo subido
  private saveFileData(upload: Upload) {
    this.afDB.list(`${this.basePath}/`).push(upload);
  }

  // Se elimina de la db la ruta del archivo
  private deleteFileData(key: string) {
    return this.afDB.list(`${this.basePath}/`).remove(key);
  }

  // Se elimina del storage el archivo
  private deleteFileStorage(name:string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }

}
