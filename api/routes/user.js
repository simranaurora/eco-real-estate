import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ msg: 'user works' });
});

export default router;