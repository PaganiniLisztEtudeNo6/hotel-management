const express = require('express');
const router = express.Router();

// ตัวอย่างการสร้าง endpoint
router.get('/', (req, res) => {
    res.send('User route works!');
});

module.exports = router; 
