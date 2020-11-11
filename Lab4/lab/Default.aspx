<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ASPX Form Example</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox runat="server" ID="name"></asp:TextBox>            
            <asp:Button runat="server" ID="submit" Text="Submit"/>            
        </div>
        <div>
            <asp:Label runat="server" ID="label" ForeColor="Red"></asp:Label>
        </div>
    </form>
</body>
</html>

