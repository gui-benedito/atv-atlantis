import { Router } from 'express';
import { cadastrarDocumento, listarDocumentos } from '../controllers/documentoController';

const router = Router();

// Rota para cadastro de documento
router.get('/listar', listarDocumentos)
router.post('/cadastrar', cadastrarDocumento);

export default router;