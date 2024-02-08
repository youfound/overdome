$(function () {
  "use strict";

  $(".preloader").fadeOut();

  // =================================
  // Tooltip
  // =================================
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // =================================
  // Popover
  // =================================
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // increment & decrement
  $(".minus,.add").on("click", function () {
    var $qty = $(this).closest("div").find(".qty"),
      currentVal = parseInt($qty.val()),
      isAdd = $(this).hasClass("add");
    !isNaN(currentVal) &&
      $qty.val(
        isAdd ? ++currentVal : currentVal > 0 ? --currentVal : currentVal
      );
  });

   // fixed header
   $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $(".topbar").addClass("shadow-sm");
    } else {
      $(".topbar").removeClass("shadow-sm");
    }
  });

   /*-----------------------------------------------
|   Data table
-----------------------------------------------*/


  var dataTables = $('.data-table');

  var customDataTable = function customDataTable(elem) {
    elem.find('.pagination').addClass('pagination-sm');
  };

  dataTables.length && dataTables.each(function (index, value) {
    var $this = $(value);
    var options = $.extend({
      responsive: true,
      dom: "<'row mx-1'<'col-sm-12 col-md-6 px-3'l><'col-sm-12 col-md-6 px-3'f>>" + "<'table-responsive'tr>" + "<'row mx-1 align-items-center justify-content-center justify-content-md-between'<'col-auto mb-2 mb-sm-0'i><'col-auto'p>>"
    }, $this.data('options'));
    $this.DataTable(options);
    var $wrpper = $this.closest('.dataTables_wrapper');
    customDataTable($wrpper);
    $this.on('draw.dt', function () {
      return customDataTable($wrpper);
    });
  });

  
});
