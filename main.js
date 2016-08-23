var Donor = (function() {
  var donorList = [];

  return {
    addDonor: function(donorInfo) {
      donorList.push(donorInfo);
      redrawTable();
    },
    getDonorList: function() {
      return donorList;
    }
  }
})();

function submitForm() {
  var name = document.getElementById('name').value;
  var pledge = document.getElementById('pledge').value;
  var donationType = document.getElementById('donationType').value;
  var donorInfo = {
    name,
    pledge,
    donationType
  }
  Donor.addDonor(donorInfo);
}

function redrawTable() {
  var donors = Donor.getDonorList();
  var tableHTML = donors.map(function(donor) {
    return "<tr><td>" + donor.name + "</td><td>" + formatter.format(donor.pledge) + "</td><td>" + donor.donationType + "</td></tr>"
  }).join("");
  document.getElementById('tbody').innerHTML = tableHTML;
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
