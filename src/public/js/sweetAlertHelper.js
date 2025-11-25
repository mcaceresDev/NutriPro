const alertType = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
}
const sendFeedBack= (message, alertType)=> {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  return Toast.fire({
    icon: alertType ? alertType : "success",
    title: message ? message : ""
  });
}