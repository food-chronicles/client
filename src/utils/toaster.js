import Swal from 'sweetalert2'

export function successToaster(title, message) {
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    toast: true,
    position: 'top-right'
  })
}

export function errorToaster(title, message) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    toast: true,
    position: 'top-right'
  })
}