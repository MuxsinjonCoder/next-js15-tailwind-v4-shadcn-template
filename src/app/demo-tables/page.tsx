import BasicTable from "@/components/pages/demo-tables/basic-table";
import MassiveDataTable from "@/components/pages/demo-tables/massive-data-table";
import BasicPageLayout, {
  BasicPageHeader,
} from "@/components/reuseable/page-layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function DemoTablesPage() {
  return (
    <>
      <BasicPageLayout
        title="Demo tables page"
        description="Description for demo tables page."
      >
        <BasicPageHeader>
          <Button>+ Add new button</Button>
        </BasicPageHeader>
        <BasicTable />
        <Separator className="my-10 bg-primary" />
        <MassiveDataTable />
      </BasicPageLayout>
    </>
  );
}
