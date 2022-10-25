import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

export const errorNotification = (title = 'Error!') => {
  MySwal.fire({
    icon: 'error',
    title: `<p>${title}</p>`,
    didOpen: () => {
      MySwal.clickConfirm()
    }
  }).then(() => MySwal.fire(title, '', 'error'))
}

export const successNotification = (title = 'Success!') => {
  MySwal.fire({
    icon: 'success',
    title: `<p>${title}</p>`,
    didOpen: () => {
      MySwal.clickConfirm()
    }
  }).then(() => MySwal.fire(title, '', 'success'));
}
