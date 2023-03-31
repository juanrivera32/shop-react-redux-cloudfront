import API_PATHS from "~/constants/apiPaths";
import ProductsTable from "~/components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "~/components/pages/admin/PageProductImport/components/CSVFileImport";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from '@mui/material/Alert';

import { Link } from "react-router-dom";
import { useState } from "react";

export default function PageProductImport() {
  const [importFileError, setImportError] = useState('');
  
  const onFailedImport = (status: number) => {
    if (status === 403) setImportError('403 - User is not authorized to access this resource');
    else if (status === 401) setImportError('401 - Invalid credentials')
    else setImportError(`${status} - Internal Server Error`)
  }

  return (
    <Box py={3}>
      <Box my={2}>
        {!!importFileError && <Alert severity="error" onClose={() => setImportError('')}>{importFileError}</Alert>}
      </Box>
      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
          onImportFileFailure={onFailedImport}
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ alignSelf: "end" }}
          component={Link}
          to={"/admin/product-form"}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}
