import { Router } from 'express';

const router = Router();

/**
 * @route   GET /api/health
 * @desc    Health check endpoint to verify server status
 * @access  Public
 */
router.get('/', (req, res) => {
    // Get server uptime in seconds
    const uptime = process.uptime();
    
    // Format uptime into human-readable format
    const formatUptime = (seconds: number) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        return `${days}d ${hours}h ${minutes}m ${secs}s`;
    };
    
    // Return health information
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: formatUptime(uptime),
        uptimeSeconds: uptime,
        environment: process.env.NODE_ENV || 'development',
        memoryUsage: {
            rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB`,
            heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB`,
        }
    });
});

export default router;