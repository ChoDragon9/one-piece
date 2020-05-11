const ZOOM_OPTION = {
  enabled: true,
  initialRange: [0, 3]
};

const draw = (columns, zoom = false) => {
  return c3.generate({
    bindto: '#chart',
    data: {
      columns
    },
    zoom: zoom ? ZOOM_OPTION : undefined
  });
};

const updateData = (chart, columns, unmount = false) => {
  setTimeout(function () {
    if (unmount) {
      document.querySelector('#chart').innerHTML = '';
      chart = draw(columns, true)
    } else {
      chart.load({columns});
      chart.zoom(ZOOM_OPTION.initialRange)
    }
  }, 1000);
};
