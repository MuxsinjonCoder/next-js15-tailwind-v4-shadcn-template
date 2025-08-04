import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface BasicPageLayoutPropsTypes {
  title: string;
  description?: string;
  children: ReactNode;
}

export function BasicPageHeader({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default function BasicPageLayout({
  title,
  description,
  children,
}: BasicPageLayoutPropsTypes) {
  let cardHeaderCodes: ReactNode = null;
  const content: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === BasicPageHeader) {
      cardHeaderCodes = (child as React.ReactElement<{ children: ReactNode }>)
        .props.children;
    } else {
      content.push(child);
    }
  });

  return (
    <Card className="shadow-md rounded-2xl border border-border bg-background">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-xl sm:text-2xl font-semibold">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="text-sm sm:text-base text-muted-foreground">
                {description}
              </CardDescription>
            )}
          </div>
          <div className="w-full sm:w-auto">{cardHeaderCodes}</div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">{content}</CardContent>
    </Card>
  );
}
