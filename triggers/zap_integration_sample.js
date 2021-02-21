const perform = (z, bundle) => {
  return [bundle.cleanedRequest];
};

module.exports = {
  operation: {
    perform: perform,
    type: 'hook',
    outputFields: [
      { key: 'full_name', label: 'Full Name', type: 'string' },
      { key: 'mobile_number', label: 'Mobile Number', type: 'string' },
      { key: 'email', label: 'Email Address', type: 'string' },
      {
        key: 'created_at',
        label: 'Registration Date and Time',
        type: 'string',
      },
      { key: 'id', label: 'ID', type: 'integer' },
    ],
  },
  key: 'zap_integration_sample',
  noun: 'Registration',
  display: {
    label: 'Zap Integration Sample',
    description: 'Triggers when new registration is created.',
    hidden: false,
    important: true,
  },
};
