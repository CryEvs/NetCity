Const kMaximumUploadRequestSize					= 22528 ' 22 Mb
Const kPhotoFile_MaxSize_KB						= 100	' 100 Kb
Const kPortfolioDocFile_MaxSize_KB				= 20480	' 20 Mb
Const kSchoolDocFile_MaxSize_KB					= 20480 ' 20 Mb
Const kLAImportFileMaxSize_KB					= 8192	' 8 Mb
Const kFileMaxSize_KB							= 8192 	' 8 Mb
Const kPlannerDocFileNote_MaxSize_KB			= 2048 	' 2 Mb
Const kDiaryFileResult_MaxSize_KB				= 2048	' 2 Mb

Const kResizeAnswerImageWidth					= 1024
Const kResizeAnswerImageQuality					= 80
Const kResizeAnswerImageMaxFileSize				= 1024	' 1 Мб 

Const kResizeMailImageWidth						= 1024
Const kResizeMailImageMaxFileSize				= 1024	' 1 Мб 

Const kResizeAssignmentImageWidth				= 1024
Const kResizeAssignmentImageMaxFileSize			= 1024	' 1 Мб 
Const kDiaryFileResult_FileExts					= ""

Sub InitUploadLimits()
	Dim uploadLimits

	Set uploadLimits = Server.CreateObject("NetCity.UploadLimits")

	uploadLimits.FileSizeLimit					= kFileMaxSize_KB
	uploadLimits.MaximumUploadRequestSizeLimit	= kMaximumUploadRequestSize
	uploadLimits.PhotoFileSizeLimit				= kPhotoFile_MaxSize_KB
	uploadLimits.PortfolioDocFileSizeLimit		= kPortfolioDocFile_MaxSize_KB
	uploadLimits.SchoolDocFileSizeLimit			= kSchoolDocFile_MaxSize_KB
	uploadLimits.LAImportFileSizeLimit			= kLAImportFileMaxSize_KB
	uploadLimits.PlannerDocFileNoteSizeLimit	= kPlannerDocFileNote_MaxSize_KB
	uploadLimits.DiaryFileResultSizeLimit		= kDiaryFileResult_MaxSize_KB
	uploadLimits.DiaryFileResultFileExts		= kDiaryFileResult_FileExts
	uploadLimits.ResizeAnswerImageWidth			= kResizeAnswerImageWidth
	uploadLimits.ResizeAnswerImageQuality		= kResizeAnswerImageQuality
	uploadLimits.ResizeAnswerImageMaxFileSize	= kResizeAnswerImageMaxFileSize
	uploadLimits.ResizeMailImageWidth			= kResizeMailImageWidth
	uploadLimits.ResizeMailImageMaxFileSize		= kResizeMailImageMaxFileSize
	uploadLimits.ResizeAssignmentImageWidth		= kResizeAssignmentImageWidth
	uploadLimits.ResizeAssignmentImageMaxFileSize= kResizeAssignmentImageMaxFileSize

	obTokenMgr.Application()("UploadLimits") = uploadLimits
End Sub