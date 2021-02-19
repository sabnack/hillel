<?xml version="1.0" encoding="UTF-8"?>
<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">
	<?if $(var.Configuration) = Debug ?>
	<!-- DEBUG ONLY -->

	<?define ProductCode = "{E1E81B42-A7B9-4799-9E62-84E032E9BC57}"?>
	<?define Background = "background-dev.bmp"?>
	<?define Banner = "banner-dev.bmp"?>
	<?define Icon = "logo-dev.ico"?>
	<?define  ProductName = "!(loc.ProductNameDev)"?>
	<?define  ProductNameFolder = "!(loc.ProductNameFolderDev)"?>
	<!-- Upgrade code DONT CHANGE IT    B2A8EF31-F5D4-49C6-966A-EFD47A84F0DC-->
	<?define UpgradeCode = "B2A8EF31-F5D4-49C6-966A-EFD47A84F0DC"?>
	<?else?>

	<!-- RELEASE ONLY -->

	<?define ProductCode = "{641AEA39-B527-43C3-8787-FA74A142893D}"?>
	<?define Background = "background.bmp"?>
	<?define Banner = "banner.bmp"?>
	<?define Icon = "logo-prod.ico"?>
	<?define  ProductName = "!(loc.ProductName)"?>
	<?define  ProductNameFolder = "!(loc.ProductNameFolder)"?>
	<!-- Upgrade code DONT CHANGE IT      26ACC11E-415A-42D3-B1D3-58F86D80DDD1-->
	<?define UpgradeCode = "26ACC11E-415A-42D3-B1D3-58F86D80DDD1"?>
	<?endif?>



	<!-- Define main product -->
	<Product Id="$(var.ProductCode)"
			 Name="$(var.ProductName)"
			 Language="!(loc.Language)"
			 Version="$(var.BuildVersion)"
			 Manufacturer="!(loc.Company)"
			 UpgradeCode="$(var.UpgradeCode)">

		<!-- Provide package details -->
		<Package InstallerVersion="200"
				   Compressed="yes"
				   InstallScope="perMachine"
				   Platform="x64"
				   Manufacturer="!(loc.Company)"
				   Description="!(loc.Description)"
				   Languages="!(loc.Language)"
               />

		<MajorUpgrade DowngradeErrorMessage="!(loc.DowngradeErrorMessage)" />

		<!-- Include .cab file into .msi file-->
		<MediaTemplate EmbedCab="yes" />

		<!-- Icon for this installer (shows up in Add/Remove programs)-->
		<Property Id="ARPPRODUCTICON" Value="icon.ico" />
		<!-- Define main app icon-->
		<Icon Id="icon.ico" SourceFile="$(var.SimpleRfid.ZplPrintClient.ProjectDir)\Resources\$(var.Icon)"/>

		<!-- Website(shows in the Add/Remove programs)-->
		<Property Id="ARPURLINFOABOUT">http://www.simplerfid.com</Property>		
		<!-- Create a basic UI for the installer-->
		<UIRef Id="WixUI_Minimal"/>

		<!-- Change the installer UI background images-->
		<WixVariable Id="WixUIDialogBmp" Value="$(var.ProjectDir)\Assets\$(var.Background)"/>
		<WixVariable Id="WixUIBannerBmp" Value="$(var.ProjectDir)\Assets\$(var.Banner)"/>
		<WixVariable Id="WixUILicenseRtf" Value="$(var.ProjectDir)\Assets\License.rtf"/>
		<!--Define compnents, shortcuts, files etc... for installer-->
		<Feature Id="ProductFeature" Title="SimpleRfid.ZplPrintClient.InstallerWix" Level="1">
			<ComponentGroupRef Id="ProductComponents" />
			<ComponentGroupRef Id="PublishedComponents" />
		</Feature>

		<InstallExecuteSequence>
			<Custom Action='addGuidToRegistry' After='InstallInitialize'>NOT Installed</Custom>
		</InstallExecuteSequence>
	</Product>

	<Fragment>
		<Binary Id="addGuidToRegistryBinary" SourceFile="$(var.SimpleRfid.ConfigureClient.TargetDir)$(var.SimpleRfid.ConfigureClient.TargetName).CA.dll" />
		<CustomAction Id="addGuidToRegistry" Impersonate="no" BinaryKey="addGuidToRegistryBinary" DllEntry="AddGuidToRegistry" Execute="deferred" Return="check" />
		<Property Id="addGuidToRegistry" Value="GuidName=!(loc.GuidName)" />
	</Fragment>
</Wix>



private void RunBatFile(string sRandBatFileName, bool isUninstall = false, int a = 10)
		{
        }

        RunBatFile("string", a:20)


class AppendToFileNameOptions { 
    define commands in set(group) named fetch 
    [Option(Group = "append", HelpText="Prefix to append to file name")] 
    public string Prefix { get; set; } 
    [Option(Group = "append", HelpText="Suffix to append to file name")] 
    public string Suffix { get; set; } 
    [Option("source", HelpText="The path of a file to rename")] 
    public string FilePath { get; set; } }


    msiexec /X{E1E81B42-A7B9-4799-9E62-84E032E9BC57} /quiet /qn /log "C:\ProgramData\SimpleRFID ZPL Print Client (DEV)\UpdateRunLog.log" TIMEOUT /T 20 /NOBREAK