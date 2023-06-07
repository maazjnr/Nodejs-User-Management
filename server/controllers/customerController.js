/**
 * Customer Routes
 */

exports.homepage = async (req, res) => {
  const local = {
    title: "User Management System",
    description: "Free Nodejs User Management System",
  };
  res.render("index", local);
};

/**
 * New Customer form
 */

exports.addCustomer = async (req, res) => {
  const local = {
    title: "Add New Customer",
    description: "Free Nodejs User Management System",
  };
  res.render("customer/add", local);
};
