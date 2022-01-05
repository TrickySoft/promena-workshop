/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multiselect-checkboxes';
import Menu from '../../components/tableMenu/index';
import './index.scss';
import {getUserList} from '../../utils/apiCalls';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
// import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import 'datatables.net-buttons/js/dataTables.buttons.min';
import jsZip from 'jszip';
import 'datatables.net-buttons/js/buttons.html5.min';
import 'datatables.net-buttons/js/buttons.print.min';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jsZip;

const CommonTable = () => {
const [isShowPopUp, setisShowPopUp] = useState(false);

  const options = [
    { label: 'Name', value: 'Name', id: 1, checked: true },
    { label: 'Position', value: 'Position', id: 2, checked: true },
    { label: 'Office', value: 'Office', id: 3, checked: true },
    { label: 'Extn', value: 'Extn', id: 4, checked: true },
    { label: 'Start date', value: 'Start date', id: 5, checked: true }
  ];
  const [selectedOptions, setSelectedOptions] = useState([{ label: 'All', value: '*' }, ...options]);
  const dataSet = [
    ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29'],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02'],
    ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06']
  ];

  const columns = [
    { title: 'Name' },
    { title: 'Position' },
    { title: 'Office' },
    { title: 'Extn.' },
    { title: 'Start date' },
    { title: 'Actions' }
  ];

const handleCancel = () =>{
  setisShowPopUp(false);
}

  const getData =()=>{
     getUserList((response)=>{
      debugger;
      console.log(response);
    })
  }
  useEffect(() => {
    // getData();
  
    $(document).ready(function () {
      var table = $('#example').DataTable({
        data: dataSet,
        columns: columns,
        'scrollY': 250,
        'scrollX': true,
        'ordering': true,
        dom: 'ifrtlpB',
        buttons: [
          {
            extend: 'collection',
            text: '',
            className: 'common-table__export-btn',
            buttons: [
              { extend: 'csv', className: 'common-table__export-btn--options' },
              { extend: 'excel', className: 'common-table__export-btn--options' },
              { extend: 'pdf', className: 'common-table__export-btn--options' },
              // { extend: 'print', className: 'common-table__export-btn--options' }
            ]
          }
        ],
        'mRender': function(dataSet, type, full) {
          return '<a class="btn btn-info btn-sm" href=#/' + full[0] + '>' + 'Edit' + '</a>';
        },
        stateSave: true,
        bRetrieve: true,
        orderCellsTop: true,
        fixedHeader: true
      });
     
       $('#example thead tr').clone(true).appendTo('#example thead');
      $('#example thead tr:eq(1) th').each(function (i) {
        var title = $(this).text();
        $(this).off('click.DT');
        $(this).removeAttr('aria-sort');
        $(this).removeAttr('aria-controls');
        $(this).removeClass('sorting sorting_desc sorting_asc sorting:after sorting_asc:after');
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        $(this).addClass('context-menu table.tableData tbody tr:after');
        $('input', this).on('keyup change', function () {
          if (table.column(i).search() !== this.value) {
            table
              .column(i)
              .search(this.value)
              .draw();
          }
        });
      });
      toggleAllColumns(options, true, false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const getDropdownButtonLabel = ({ placeholderButtonLabel, value }) => {
    if (value && value.some((o) => o.value === '*')) {
      return `${placeholderButtonLabel}: All`;
    } else {
      const values = [];
      value.map(val => {
        values.push(val.value);
      })
      return `${placeholderButtonLabel}: ${values.join(',')}`
    }
  }

  const toggleAllColumns = (value, isHideColumn, isHideSearch) => {
    value.map((val) => {
      val.checked = false;
      var valId = val.id - 1;
      $('#example').dataTable().fnSetColumnVis(valId, isHideColumn);
      $('#example thead tr:eq(1) th').each(function (i) {
        if (i == valId) {
          if (isHideSearch) {
            $(this).hide();
            $(this).attr('hidden', true);
          } else {
            $(this).show();
            $(this).attr('hidden', false);
          }
        }
      })
    })
  }

  const toggleColumn = (value, isHideColumn, isHideSearch) => {
    var valId = value.id - 1;
    $('#example').dataTable().fnSetColumnVis(valId, isHideColumn);
    $('#example thead tr:eq(1) th').each(function (i) {
      if (i == valId) {
        if (isHideSearch) {
          $(this).hide();
          $(this).attr('hidden', true);
        } else {
          $(this).show();
          $(this).attr('hidden', false);
        }
      }
    })
  }

  const onChange = (value, event) => {
    if (event.action === 'select-option' && event.option.value === '*') {
      toggleAllColumns(options, true, false);
      setSelectedOptions([{ label: 'All', value: '*' }, ...options]);
    } else if (
      event.action === 'deselect-option' &&
      event.option.value === '*'
    ) {
      toggleAllColumns(value, false, true);
      setSelectedOptions([]);
    } else if (event.action === 'deselect-option') {
      setSelectedOptions(value.filter((o) => o.value !== '*'));
      toggleColumn(event.option, false, true);
    } else {
      setSelectedOptions(value);
      toggleColumn(event.option, true, false);
    }
  }

  return (
    <div className='common-table'>
      <div className='common-table__toggle'>
        <MultiSelect
          options={[{ label: 'All', value: '*' }, ...options]}
          placeholderButtonLabel='Show '
          getDropdownButtonLabel={getDropdownButtonLabel}
          value={selectedOptions}
          onChange={onChange}
          setState={setSelectedOptions}
          hideSearch='true'
        />
      </div>
      <table id='example' className='display' width='100%'>
      </table>
      <div className = 'common-table__dots' id = 'three-dots' onClick = {()=>{setisShowPopUp(true)}}>...</div>
{isShowPopUp ? (<Menu onCancel = {handleCancel} />):('')}
    </div>
  );
};

CommonTable.propTypes = {

};

CommonTable.defaultProps = {

};

export default React.memo(CommonTable);
